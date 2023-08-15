# API-QR-CODE Documentation

The **API-QR-CODE** is a Node.js API that provides endpoints for generating QR codes in either base64 format or as image files (PNG). This API uses the **express** framework and a custom module called **createQr** to handle QR code generation.

## Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/h4shell/API-QRCODE](https://github.com/h4shell/API-QRCODE)
   ```

2. Navigate to the project directory:
   ```bash
   cd API-QR-CODE
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Start the server:
   ```visit
   http://127.0.0.1:16666
   ```


## Usage

The API provides two endpoints for generating QR codes: `/base64` and `/img`.

### Base64 QR Code

#### Endpoint: `/base64`

Generates a QR code and returns it in base64 encoded format.

**Request:**

- Method: GET
- URL: `/base64`
- Query Parameters:
  - `data`: The data to be encoded in the QR code.

**Response:**

- If QR code generation is successful:
  - Status Code: 200 OK
  - Response Body:
    ```json
    {
      "status": true,
      "qr": "base64-encoded-qr-code-data"
    }
    ```
- If QR code generation fails:
  - Status Code: 400 Bad Request
  - Response Body:
    ```json
    {
      "error": "Error while generating QR code"
    }
    ```

### Image QR Code

#### Endpoint: `/img`

Generates a QR code and returns it as a PNG image.

**Request:**

- Method: GET
- URL: `/img`
- Query Parameters:
  - `data`: The data to be encoded in the QR code.

**Response:**

- If QR code generation is successful:
  - Status Code: 200 OK
  - Content Type: `image/png`
  - Response Body: PNG image data

- If QR code generation fails:
  - Status Code: 400 Bad Request
  - Response Body:
    ```json
    {
      "error": "Error while generating QR code"
    }
    ```

**Query:**

```
?text= Simple text of qrcode
?size= Size in px (Ex. 500) // Max 1000
?foregroundcolor= foreground color in HEX
?backgroundcolor= background color in HEX
```

## Examples

### Generating Base64 QR Code

**Request:**

```bash
GET /base64?text=Hello%20World
```


**Response:**

```json
{
  "status": true,
  "qr": "base64-encoded-qr-code-data"
}
```

### Generating Image QR Code

**Request:**

```bash
GET /img?text=Hello%20World
```

**Response:**

A PNG image representing the QR code.

## Contributing

Contributions are welcome! If you find any issues or would like to add new features, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).