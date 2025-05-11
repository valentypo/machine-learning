from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.get_json()
    print('Received data:', data)
    return jsonify({"message": "Data received!", "data": data}), 200

if __name__ == "__main__":
    app.run(debug=True, port=8080)