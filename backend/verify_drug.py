from fda_api import fetch_fda_data
from expiry_check import is_expired
from qr_utils import generate_qr_code

def verify_drug(drug_name=None, barcode=None):
    """
    Verify drug information using FDA API and generate QR code
    
    Args:
        drug_name (str): Name of the drug to verify
        barcode (str): Barcode of the drug (optional)
    
    Returns:
        dict: Dictionary containing drug info, expiry status, and QR code
    """
    if not drug_name and not barcode:
        return {'error': 'No drug name or barcode provided'}

    # Fetch drug info from openFDA
    drug_info = fetch_fda_data(drug_name, barcode)
    if 'error' in drug_info:
        return {'error': drug_info['error']}

    # Extract relevant fields
    results_list = drug_info.get('results', [{}])
    results = results_list[0] if isinstance(results_list, list) and results_list else {}
    brand_name = results.get('brand_name', 'Unknown')
    ndc = results.get('product_ndc', 'Unknown')
    manufacturer = results.get('labeler_name', 'Unknown')
    expiration_date = results.get('listing_expiration_date', None)

    # Check expiry
    expired = is_expired(expiration_date) if expiration_date else None

    # Generate QR code
    qr_payload = {
        'brand_name': brand_name,
        'ndc': ndc,
        'manufacturer': manufacturer
    }
    qr_code = generate_qr_code(qr_payload)

    return {
        'drug_info': results,
        'is_expired': expired,
        'qr_code': qr_code
    } 