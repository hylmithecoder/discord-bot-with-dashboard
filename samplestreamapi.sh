set UUID=$(uuidgen | tr '[:upper:]' '[:lower:]')

curl -i \
    -H "Authorization: Token fed405dd4d6bbfd465c958f8d17a1a5474f519d0" \
    -H "Content-Type: application/json" \
    -H "Accept: text/event-stream" \
    -H "Accept-Language": "en-US,en;q=0.9" \
    -H "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
    -H "Origin": "https://character.ai" \
    -H "Referer": "https://character.ai/" \
    -d '{
        "history_external_id":"",kmUyOhrlPCxOpVq5A5Bt0NIiV6vTTQjPL1eeAdmxBt8
        "character_external_id":"zISqldbxDP0sG2UfhCYcGNVtF7tksXNLUcuo5wTu5OM",
        "text":"Halo Plana!",
        "tgt":"", 
        "primary_msg_uuid":"'"$UUID"'"
    }' \
    https://plus.character.ai/chat/streaming/
