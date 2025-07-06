from datetime import datetime

def is_expired(expiration_date):
    """
    Checks if the given expiration_date (YYYYMMDD) is in the past.
    Returns True if expired, False otherwise.
    """
    try:
        exp_date = datetime.strptime(expiration_date, "%Y%m%d")
        return exp_date < datetime.now()
    except Exception:
        return None 