import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Form, Button, Alert, Spinner } from "react-bootstrap";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 
    const handleSubmit = (e) => {
      e.preventDefault();

      const success = login(email, password);

      console.log("login success?", success);

      if (success) {
        navigate("/home");
      } else {
        setError("Credenciales incorrectas.");
      }
    };
  

  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-auto vh-100">
      <Form
        onSubmit={handleSubmit}
        className="border p-4 rounded shadow p-5"
        style={{ width: "400px" }}
      >
        <h1 className="text-center">Bienvenido</h1>
        <p>Inicia sesión para continuar.</p>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        {loading ? (
          <Button variant="primary" disabled className="w-100 mt-3">
            <Spinner animation="border" size="sm" className="me-2" />
            Cargando...
          </Button>
        ) : (
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Iniciar sesión
          </Button>
        )}
      </Form>
    </div>
  );
};

export default LoginPage;
