// Loon http-response脚本，用于完全替换JSON响应体内容

// 解析原始响应体
let response = JSON.parse($response.body);

// 定义新的响应体
response = {
  "status": 0,
  "receipt": {
    "app_item_id": 1534704608,
    "receipt_creation_date": "2023-09-09 16:06:26 Etc/GMT",
    "receipt_type": "Production",
    "bundle_id": "com.zerone.hidesktop",
    "original_purchase_date": "2023-09-09 16:00:00 Etc/GMT",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1694250549000",
        "transaction_id": "490001314520000",
        "is_trial_period": "false",
        "original_transaction_id": "490001314520000",
        "original_purchase_date_pst": "2023-09-09 02:09:10 America/Los_Angeles",
        "product_id": "com.zerone.hidesktop.forever",
        "in_app_ownership_type": "PURCHASED",
        "purchase_date": "2023-09-09 09:09:09 Etc/GMT",
        "original_purchase_date_ms": "1694250550000",
        "purchase_date_pst": "2023-09-09 02:09:09 America/Los_Angeles",
        "original_purchase_date": "2023-09-09 09:09:10 Etc/GMT"
      }
    ],
    "adam_id": 1534704608,
    "receipt_creation_date_pst": "2023-09-09 06:06:26 America/Los_Angeles",
    "request_date": "2023-09-09 16:06:27 Etc/GMT",
    "request_date_pst": "2023-09-09 06:06:27 America/Los_Angeles",
    "version_external_identifier": 862531073,
    "request_date_ms": "1694273635000",
    "original_purchase_date_pst": "2023-09-09 06:00:00 America/Los_Angeles",
    "application_version": "16",
    "original_purchase_date_ms": "1694273430000",
    "receipt_creation_date_ms": "1694273634000",
    "original_application_version": "4",
    "download_id": 503087301606683970
  },
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1694250549000",
      "transaction_id": "490001314520000",
      "is_trial_period": "false",
      "original_transaction_id": "490001314520000",
      "original_purchase_date_pst": "2023-09-09 02:09:10 America/Los_Angeles",
      "product_id": "com.zerone.hidesktop.forever",
      "in_app_ownership_type": "PURCHASED",
      "purchase_date": "2023-09-09 09:09:09 Etc/GMT",
      "original_purchase_date_ms": "1694250550000",
      "purchase_date_pst": "2023-09-09 02:09:09 America/Los_Angeles",
      "original_purchase_date": "2023-09-09 09:09:10 Etc/GMT"
    }
  ],
  "latest_receipt": "hour",
  "environment": "Production",
  "pending_renewal_info": [
    {
      "product_id": "com.zerone.hidesktop.forever",
      "original_transaction_id": "490001314520000",
      "auto_renew_product_id": "com.zerone.hidesktop.forever",
      "auto_renew_status": "1"
    }
  ]
};

// 返回新的响应体
$done({ body: JSON.stringify(response) });