# app.py
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

app = Flask(__name__)
CORS(app)  # Enable CORS if your front-end is hosted separately

##############################
#   AI Model Components      #
##############################

def rule_based_recommendation(user_profile):
    """
    A simple rule-based recommendation engine.
    If risk tolerance is low (<=2) and the investment horizon is short (<5 years),
    then recommend a conservative portfolio.
    """
    if user_profile.get('risk_tolerance') <= 2 and user_profile.get('investment_horizon') < 5:
        return {"Fixed Deposits": 60, "Conservative Mutual Funds": 30, "Gold": 10}
    else:
        return {"Balanced Mutual Funds": 50, "Stocks": 30, "Fixed Deposits": 20}

def train_ml_model():
    """
    Train a dummy ML model (RandomForestRegressor) on random data for demonstration.
    In a real scenario, you'd train on historical user and market data.
    """
    # Create a dummy dataset
    data = pd.DataFrame({
        'age': np.random.randint(25, 60, 100),
        'income': np.random.randint(300000, 1500000, 100),
        'risk_tolerance': np.random.randint(1, 6, 100),
        'investment_horizon': np.random.randint(3, 30, 100),
        'stocks_allocation': np.random.randint(10, 70, 100)
    })
    
    X = data[['age', 'income', 'risk_tolerance', 'investment_horizon']]
    y = data['stocks_allocation']
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    return model

# Train the ML model once and reuse it.
ml_model = train_ml_model()

def ml_based_recommendation(user_profile, model):
    """
    Use the trained ML model to predict a stocks allocation percentage.
    """
    features = pd.DataFrame([{
        'age': user_profile['age'],
        'income': user_profile['income'],
        'risk_tolerance': user_profile['risk_tolerance'],
        'investment_horizon': user_profile['investment_horizon']
    }])
    predicted_stock_allocation = model.predict(features)[0]
    
    # For simplicity, we derive a two-asset recommendation.
    recommendation = {
        "Stocks": round(predicted_stock_allocation, 2),
        "Balanced Mutual Funds": round(100 - predicted_stock_allocation, 2)
    }
    return recommendation

def combine_recommendations(rule_rec, ml_rec):
    """
    Combine recommendations from the rule-based engine and the ML model.
    In this example, we simply average the percentages for overlapping asset classes.
    """
    final_rec = {}
    keys = set(rule_rec.keys()).union(ml_rec.keys())
    for key in keys:
        rule_val = rule_rec.get(key, 0)
        ml_val = ml_rec.get(key, 0)
        final_rec[key] = round((rule_val + ml_val) / 2, 2)
    return final_rec

##############################
#       API Endpoints        #
##############################

@app.route('/')
def index():
    # Serve the HTML page (templates/index.html)
    return render_template('index.html')

@app.route('/api/advice', methods=['POST'])
def get_investment_advice():
    data = request.get_json()
    # Validate and parse the incoming data
    try:
        user_profile = {
            "age": int(data.get('age', 0)),
            "income": int(data.get('income', 0)),
            "savings": int(data.get('savings', 0)),
            "investment_horizon": int(data.get('investment_horizon', 0)),
            "risk_tolerance": int(data.get('risk_tolerance', 0))
        }
    except Exception as e:
        return jsonify({"error": "Invalid input data", "details": str(e)}), 400

    # Get recommendations from both the rule-based and ML models
    rule_rec = rule_based_recommendation(user_profile)
    ml_rec = ml_based_recommendation(user_profile, ml_model)
    final_rec = combine_recommendations(rule_rec, ml_rec)
    
    response = {
        "investment_recommendation": final_rec,
        "disclaimer": "This advice is for demonstration purposes only. Consult a certified financial advisor for personalized advice."
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
