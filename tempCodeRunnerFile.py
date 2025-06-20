import numpy as np

# Step activation function
def step_function(z):
    return 1 if z >= 0 else 0

# Perceptron Training Function
def train_perceptron(X, Y, learning_rate, epochs):
    n_samples, n_features = X.shape
    weights = np.random.randn(n_features) * 0.01  # Small random init
    bias = 0.0

    for epoch in range(epochs):
        for i in range(n_samples):
            x_i = X[i]
            y_true = Y[i]
            z = np.dot(weights, x_i) + bias
            y_pred = step_function(z)
            error = y_true - y_pred

            # Weight and bias update
            weights += learning_rate * error * x_i
            bias += learning_rate * error

    return weights, bias

# Prediction function
def predict(X, weights, bias):
    return [step_function(np.dot(weights, x_i) + bias) for x_i in X]

# --- Main Program Starts Here ---
if _name_ == "_main_":
    print("=== Single Layer Perceptron Trainer ===")

    n_samples = int(input("Enter number of training samples: "))
    n_features = int(input("Enter number of features (e.g., 3 for x1, x2, x3): "))

    X = []
    Y = []

    print("Enter the input features (space-separated) and label for each sample:")
    for i in range(n_samples):
        raw_input = input(f"Sample {i+1} (e.g., 0 1 1  -> label 1): ")
        *features, label = map(int, raw_input.strip().split())
        X.append(features)
        Y.append(label)

    X = np.array(X)
    Y = np.array(Y)

    learning_rate = float(input("Enter learning rate (e.g., 0.1): "))
    epochs = int(input("Enter number of training epochs (e.g., 10 or 20): "))

    weights, bias = train_perceptron(X, Y, learning_rate, epochs)

    print("\n--- Training Complete ---")
    print("Weights:", weights)
    print("Bias:", bias)

    print("\nEnter a new input to test (space-separated features):")
    test_input = list(map(int, input().strip().split()))
    result = step_function(np.dot(weights, test_input) + bias)
    print("Predicted Output:", result)