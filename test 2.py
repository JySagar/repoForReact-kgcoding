# Step activation function
def step_function(z):
    return 1 if z >= 0 else 0

# Dot product function
def dot_product(v1, v2):
    return sum(x * y for x, y in zip(v1, v2))

# Perceptron Training Function
def train_perceptron(X, Y, learning_rate, epochs):
    n_samples = len(X)
    n_features = len(X[0])
    weights = [0.01] * n_features  # Small initial weights
    bias = 0.0

    for epoch in range(epochs):
        for i in range(n_samples):
            x_i = X[i]
            y_true = Y[i]
            z = dot_product(weights, x_i) + bias
            y_pred = step_function(z)
            error = y_true - y_pred

            # Update weights and bias
            weights = [w + learning_rate * error * x for w, x in zip(weights, x_i)]
            bias += learning_rate * error

    return weights, bias

# Prediction function
def predict(X, weights, bias):
    return [step_function(dot_product(weights, x_i) + bias) for x_i in X]

# --- Main Program Starts Here ---
if __name__ == "__main__":
    print("=== Single Layer Perceptron Trainer (No NumPy) ===")

    n_samples = int(input("Enter number of training samples: "))
    n_features = int(input("Enter number of features (e.g., 3 for x1, x2, x3): "))

    X = []
    Y = []

    print("Enter the input features (space-separated) and label for each sample:")
    for i in range(n_samples):
        raw_input = input(f"Sample {i+1} (e.g., 0 1 1 -> label 1): ")
        *features, label = map(int, raw_input.strip().split())
        X.append(features)
        Y.append(label)

    learning_rate = float(input("Enter learning rate (e.g., 0.1): "))
    epochs = int(input("Enter number of training epochs (e.g., 10 or 20): "))

    weights, bias = train_perceptron(X, Y, learning_rate, epochs)

    print("\n--- Training Complete ---")
    print("Weights:", weights)
    print("Bias:", bias)

    print("\nEnter a new input to test (space-separated features):")
    test_input = list(map(int, input().strip().split()))
    result = step_function(dot_product(weights, test_input) + bias)
    print("Predicted Output:", result)