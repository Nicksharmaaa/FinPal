from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing if your front-end and back-end are on different domains

# A simple rule-based function (replace or extend with your AI model logic)
def rule_based_recommendation(user_profile):
    if user_profile.get('risk_tolerance') <= 2 and user_profile.get('investment_horizon') < 5:
        return {"Fixed Deposits": 60, "Conservative Mutual Funds": 30, "Gold": 10}
    return {"Balanced Mutual Funds": 50, "Stocks": 30, "Fixed Deposits": 20}

@app.route('/api/advice', methods=['POST'])
def get_investment_advice():
    data = request.get_json()
    
    # Parse and convert data as necessary
    user_profile = {
        "age": int(data.get('age', 0)),
        "income": int(data.get('income', 0)),
        "savings": int(data.get('savings', 0)),
        "investment_horizon": int(data.get('investment_horizon', 0)),
        "risk_tolerance": int(data.get('risk_tolerance', 0))
    }
    
    # Generate a recommendation (you can call your machine learning model here)
    advice = rule_based_recommendation(user_profile)
    
    response = {
        "investment_recommendation": advice,
        "disclaimer": "This advice is for demonstration purposes only. Consult a certified financial advisor for personalized advice."
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
