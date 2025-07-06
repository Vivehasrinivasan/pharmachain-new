import requests

def fetch_fda_data(drug_name=None, barcode=None):
    try:
        if drug_name:
            url = f'https://api.fda.gov/drug/ndc.json?search=brand_name:"{drug_name}"&limit=1'
        elif barcode:
            url = f'https://api.fda.gov/drug/ndc.json?search=package_ndc:"{barcode}"&limit=1'
        else:
            return {'error': 'No drug name or barcode provided'}
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        return {'error': str(e)} 