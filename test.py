# Training data
inputs = [[0, 0], [0, 1], [1, 0], [1, 1]]
outputs = [0, 1, 1, 1]  # OR gate

# Step activation function
def step_function(z):
    return 1 if z >= 0 else 0

# Initialize weights and bias
w1 = 0.1
w2 = -0.1
bias = 0.0
learning_rate = 0.1
epochs = 10

# Training loop
for epoch in range(epochs):
    print(f"Epoch {epoch}")
    for i in range(len(inputs)):
        x1, x2 = inputs[i]
        y_true = outputs[i]

        # Weighted sum
        z = w1 * x1 + w2 * x2 + bias

        # Activation
        y_pred = step_function(z)

        # Calculate error
        error = y_true - y_pred

        # Update weights and bias if prediction is wrong
        w1 += learning_rate * error * x1
        w2 += learning_rate * error * x2
        bias += learning_rate * error

        print(f"Input: {x1}, {x2} | Predicted: {y_pred} | True: {y_true} | w1: {w1:.2f}, w2: {w2:.2f}, bias: {bias:.2f}")
