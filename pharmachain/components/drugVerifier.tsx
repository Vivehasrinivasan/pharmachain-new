'use client';

import React, { useState } from 'react';

interface DrugInfo {
  brand_name: string;
  product_ndc: string;
  labeler_name: string;
}

interface VerificationResult {
  drug_info: DrugInfo;
  is_expired: boolean;
  qr_code: string;
}

export default function DrugVerifier() {
  const [drugName, setDrugName] = useState('');
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    setError('');
    setResult(null);
    setIsLoading(true);

    console.log('Drug name input value:', drugName);
    console.log('Drug name trimmed:', drugName.trim());
    console.log('Drug name length:', drugName.trim().length);

    if (!drugName.trim()) {
      setError('Please enter a drug name.');
      setIsLoading(false);
      return;
    }
   console.log('Verifying drug:', drugName);
    try {
      console.log('Sending request with data:', { drug_name: drugName });
      
      const response = await fetch('http://localhost:5000/verify-drug', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ drug_name: drugName }),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      if (!response.ok) {
        throw new Error(data.error || 'Verification failed');
      }
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  return (
    <div className="drug-verifier-container">
      <div className="drug-verifier-card">
        <h2 className="drug-verifier-title">PharmaChain: Drug Verifier</h2>
        
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter drug name..."
            value={drugName}
            onChange={(e) => setDrugName(e.target.value)}
            onKeyPress={handleKeyPress}
            className="drug-input"
            disabled={isLoading}
          />
          <button 
            onClick={handleVerify} 
            disabled={isLoading}
            className="verify-button"
          >
            {isLoading ? 'Verifying...' : 'Verify Drug'}
          </button>
        </div>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {result && (
          <div className="result-box">
            <h3>Drug Information</h3>
            <div className="drug-details">
              <p><strong>Name:</strong> {result.drug_info.brand_name}</p>
              <p><strong>NDC:</strong> {result.drug_info.product_ndc}</p>
              <p><strong>Manufacturer:</strong> {result.drug_info.labeler_name}</p>
              <p className={`expiry-status ${result.is_expired ? 'expired' : 'valid'}`}>
                <strong>Status:</strong> {result.is_expired ? '❌ Expired' : '✅ Valid'}
              </p>
            </div>
            <div className="qr-code-section">
              <h4>QR Code</h4>
              <img
                src={`data:image/png;base64,${result.qr_code}`}
                alt="Drug QR Code"
                className="qr-code-image"
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .drug-verifier-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .drug-verifier-card {
          background: white;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
        }

        .drug-verifier-title {
          text-align: center;
          color: #333;
          margin-bottom: 30px;
          font-size: 28px;
          font-weight: 600;
        }

        .input-section {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }

        .drug-input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }

        .drug-input:focus {
          outline: none;
          border-color: #667eea;
        }

        .drug-input:disabled {
          background-color: #f5f5f5;
          cursor: not-allowed;
        }

        .verify-button {
          padding: 12px 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .verify-button:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        .verify-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .error-message {
          background: #fee2e2;
          border: 1px solid #fecaca;
          color: #dc2626;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .result-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 24px;
          margin-top: 20px;
        }

        .result-box h3 {
          color: #333;
          margin-bottom: 20px;
          font-size: 20px;
        }

        .drug-details p {
          margin: 8px 0;
          font-size: 16px;
          color: #555;
        }

        .expiry-status.expired {
          color: #dc2626;
        }

        .expiry-status.valid {
          color: #059669;
        }

        .qr-code-section {
          margin-top: 20px;
          text-align: center;
        }

        .qr-code-section h4 {
          color: #333;
          margin-bottom: 12px;
        }

        .qr-code-image {
          width: 200px;
          height: 200px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .drug-verifier-card {
            padding: 20px;
          }

          .input-section {
            flex-direction: column;
          }

          .drug-verifier-title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}
