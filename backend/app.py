from flask import Flask, jsonify, request
from flask_cors import CORS
from verify_drug import verify_drug

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:5000", "http://127.0.0.1:5000"])

@app.route('/verify-drug', methods=['POST'])
def verify_drug_route():
    try:
        data = request.get_json()
        print(f"Received data: {data}")  # Debug log
        
        drug_name = data.get('drug_name') if data else None
        barcode = data.get('barcode') if data else None
        
        print(f"Extracted - drug_name: {drug_name}, barcode: {barcode}")  # Debug log
        
        if not drug_name and not barcode:
            return jsonify({'error': 'No drug name or barcode provided'}), 400
        
        # Call the verify_drug function
        result = verify_drug(drug_name=drug_name, barcode=barcode)
        print(f"Result from verify_drug: {result}")  # Debug log
        
        # Check if there's an error in the result
        if 'error' in result:
            return jsonify({'error': result['error']}), 500
            
        return jsonify(result)
        
    except Exception as e:
        print(f"Exception occurred: {str(e)}")  # Debug log
        return jsonify({'error': f'Internal server error: {str(e)}'}), 500


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000) 