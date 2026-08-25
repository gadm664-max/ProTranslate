# ProTranslate API Documentation

## Base URL
```
https://api.protranslate.dev/v1
```

## Authentication

All endpoints require Bearer token authentication:
```
Authorization: Bearer <jwt_token>
```

## Endpoints

### 1. Authentication

#### Register User
```
POST /auth/register

Body:
{
  "email": "user@example.com",
  "password": "secure_password",
  "fullName": "User Name"
}

Response:
{
  "success": true,
  "token": "jwt_token",
  "user": { ... }
}
```

#### Login
```
POST /auth/login

Body:
{
  "email": "user@example.com",
  "password": "password"
}

Response:
{
  "success": true,
  "token": "jwt_token",
  "refreshToken": "refresh_token"
}
```

### 2. Translation

#### Translate Text
```
POST /translations/text

Body:
{
  "text": "Hello, how are you?",
  "sourceLang": "en",
  "targetLang": "ar",
  "context": "general" // optional
}

Response:
{
  "success": true,
  "translation": "مرحبا، كيف حالك؟",
  "confidence": 0.95,
  "timestamp": "2026-08-25T10:30:00Z"
}
```

#### Translate Voice
```
POST /translations/voice

Content-Type: multipart/form-data

Parameters:
- audio: <audio_file>
- sourceLang: en
- targetLang: ar
- outputFormat: audio|text

Response:
{
  "success": true,
  "translatedAudio": "<base64_audio>",
  "transcript": "Original text",
  "translation": "Translated text",
  "duration": 5.2
}
```

### 3. Conversations (Real-time)

#### Start Conversation
```
POST /conversations

Body:
{
  "participants": 2,
  "languagePairs": [
    { "lang1": "en", "lang2": "ar" }
  ]
}

Response:
{
  "conversationId": "conv_123456",
  "wsUrl": "wss://api.protranslate.dev/conversations/conv_123456"
}
```

#### WebSocket Events

**Message Event**
```json
{
  "type": "message",
  "participantId": "user_123",
  "text": "Hello",
  "language": "en"
}
```

**Translation Event**
```json
{
  "type": "translation",
  "messageId": "msg_123",
  "translation": "مرحبا",
  "targetLanguage": "ar"
}
```

### 4. History

#### Get Translation History
```
GET /history?page=1&limit=20&type=text

Response:
{
  "success": true,
  "data": [
    {
      "id": "trans_123",
      "originalText": "Hello",
      "translatedText": "مرحبا",
      "sourceLang": "en",
      "targetLang": "ar",
      "timestamp": "2026-08-25T10:00:00Z"
    }
  ],
  "pagination": { "total": 150, "pages": 8 }
}
```

### 5. Supported Languages

#### Get Supported Languages
```
GET /languages

Response:
{
  "success": true,
  "languages": [
    { "code": "en", "name": "English" },
    { "code": "ar", "name": "Arabic" },
    { "code": "fr", "name": "French" },
    // ... more languages
  ]
}
```

### 6. User Profile

#### Get Profile
```
GET /users/profile

Response:
{
  "success": true,
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "fullName": "User Name",
    "preferredLanguages": ["en", "ar"],
    "createdAt": "2026-01-15T00:00:00Z"
  }
}
```

#### Update Profile
```
PUT /users/profile

Body:
{
  "fullName": "New Name",
  "preferredLanguages": ["en", "ar", "fr"]
}

Response:
{
  "success": true,
  "message": "Profile updated successfully"
}
```

## Error Handling

### Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "INVALID_LANGUAGE",
    "message": "The specified language is not supported",
    "statusCode": 400
  }
}
```

### Common Error Codes
- `UNAUTHORIZED` (401) - Missing or invalid authentication
- `FORBIDDEN` (403) - Insufficient permissions
- `NOT_FOUND` (404) - Resource not found
- `INVALID_REQUEST` (400) - Invalid request parameters
- `RATE_LIMITED` (429) - Too many requests
- `INTERNAL_ERROR` (500) - Server error

## Rate Limiting

- **Free Tier**: 100 requests/hour
- **Pro Tier**: 1000 requests/hour
- **Enterprise**: Unlimited

Headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1661870400
```
