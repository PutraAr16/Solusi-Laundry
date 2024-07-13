// // Import necessary modules
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// jest.mock("react-router-dom", () => ({
//   useNavigate: jest.fn(),
// }));

// jest.mock("./AuthContext", () => ({
//   user: jest.fn(),
//   loginUser: jest.fn(),
// }));

// test("should successfully login user with valid credentials", async () => {
//   // Mock successful responses from account methods

//   // Get a reference to the mock navigate function
//   const mockNavigate = useNavigate();

//   const mockLoginUser = useAuth().loginUser;
//   // Simulate user input and form submission
//   // ... (using fireEvent or similar methods)
//   //   const { user, loginUser } = useAuth();

//   //   loginUser({ email: "admin@gmail.com", password: "admin123" });
//   // Wait for async operations to complete
//   await Promise.resolve(); // Assuming login doesn't redirect within AuthProvider

//   expect(user.email).toEqual("admin@gmail.com");
// });
