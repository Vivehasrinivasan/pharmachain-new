import qrcode
import base64
from io import BytesIO
import json

def generate_qr_code(payload):
    """
    Generates a base64-encoded PNG QR code from a dict payload.
    """
    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(json.dumps(payload))
    qr.make(fit=True)
    img = qr.make_image(fill='black', back_color='white')
    buffered = BytesIO()
    img.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')
    return img_str 