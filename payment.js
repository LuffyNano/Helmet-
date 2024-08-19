document.getElementById("payment-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const upiId = document.getElementById("upi-id").value;

  // Typically, you would send this UPI ID to your server and then initiate a payment request using your payment gateway's API

  // Example for Razorpay (just for demonstration purposes, replace with actual integration code)
  var options = {
    key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
    amount: "1000", // Amount in paisa
    currency: "INR",
    name: "Your Company Name",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    handler: function (response) {
      alert("Payment Successful. Payment ID: " + response.razorpay_payment_id);
      // You can also send this response to your server for verification
    },
    prefill: {
      email: "test@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#3399cc",
    },
  };

  var rzp1 = new Razorpay(options);
  rzp1.open();
});
