import json
import os
import urllib.error
import urllib.request
from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            data = json.loads(body.decode("utf-8"))

            # Retrieve secret key from Vercel environment variables
            access_key = os.environ.get("WEB3FORMS_ACCESS_KEY")
            if not access_key:
                self.send_response(400)
                self.send_header("Content-type", "application/json")
                self.end_headers()
                self.wfile.write(
                    json.dumps(
                        {
                            "success": False,
                            "message": "Server configuration error: WEB3FORMS_ACCESS_KEY is missing.",
                        }
                    ).encode("utf-8")
                )
                return

            data["access_key"] = access_key
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

        except urllib.error.HTTPError as e:
            # Capture the exact error response from Web3Forms (e.g., 403 Forbidden)
            error_body = e.read().decode("utf-8")
            self.send_response(e.code)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            self.wfile.write(error_body.encode("utf-8"))

        except Exception as e:
            self.send_response(500)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            self.wfile.write(
                json.dumps({"success": False, "message": str(e)}).encode("utf-8")
            )
