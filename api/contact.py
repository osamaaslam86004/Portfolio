import json
import os
import urllib.request
from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            data = json.loads(body.decode("utf-8"))

            # Inject the secret key securely from Vercel environment variables
            data["access_key"] = os.environ.get("WEB3FORMS_ACCESS_KEY")
            data["subject"] = "New Portfolio Message from Osama Aslam"

            # Forward request server-to-server to Web3Forms
            req_data = json.dumps(data).encode("utf-8")
            req = urllib.request.Request(
                "https://api.web3forms.com/submit",
                data=req_data,
                headers={
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            )

            with urllib.request.urlopen(req) as response:
                res_body = response.read().decode("utf-8")
                self.send_response(200)
                self.send_header("Content-type", "application/json")
                self.end_headers()
                self.wfile.write(res_body.encode("utf-8"))

        except Exception as e:
            self.send_response(500)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            self.wfile.write(
                json.dumps({"success": False, "message": str(e)}).encode("utf-8")
            )
