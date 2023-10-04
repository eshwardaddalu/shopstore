from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample data for products and shopping cart
products = [
    {"id": 1, "name": "Product 1", "price": 10.99},
    {"id": 2, "name": "Product 2", "price": 19.99},
    # Add more products here
]
cart = []

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/cart', methods=['GET'])
def get_cart():
    return jsonify(cart)

@app.route('/cart/add', methods=['POST'])
def add_to_cart():
    data = request.get_json()
    product_id = data.get("product_id")
    if not product_id:
        return jsonify({"error": "Product ID is required"}), 400

    product = next((p for p in products if p["id"] == product_id), None)
    if not product:
        return jsonify({"error": "Product not found"}), 404

    cart.append(product)
    return jsonify({"message": "Product added to cart"})

@app.route('/cart/checkout', methods=['POST'])
def checkout():
    if not cart:
        return jsonify({"error": "Cart is empty"}), 400

    total_price = sum(product["price"] for product in cart)
    cart.clear()
    return jsonify({"message": f"Order placed. Total price: ${total_price}"}), 200

if __name__ == '__main__':
    app.run(debug=True)
