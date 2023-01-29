# -*- coding: utf-8 -*-
{
    "name": "Kitchen Screen by ZUSE",
    "support": "info@zuse.solutions",
    "version": "16.0",
    "summary": "POS,Point of sale kitchen screen,kitchen scren,POS kitchen screen,KDS,kds",
    "description": """
        ZUSE KDS Integration with Odoo,
        
        partial dump supported, 
        multiple screens supported, 
        multiple screens communication supported,
        order notes and product notes supported, 
        RECALL screen to save done orders up to 100 orders,
        AFTER INSTALLING THE APPLICATION, PLEASE CONTACT +966532093168 via WHATSAPP TO GET KITCHEN SCREEN URL AND GUIDANCE 
        or EMAIL sales@zuse.solutions
        
        
    please visit the website www.zuse.solutions for more details
    """,
    "author": "ZUSE",
    "website": "https://zuse.solutions",
    "category": "Sales/Point of Sale",

    # any module necessary for this one to work correctly
    "depends": [
        "point_of_sale"
    ],
    'assets': {
        'point_of_sale.assets': [
        
            'zuse_kds/static/src/js/pos_config.js',
                    
            'zuse_kds/static/src/xml/pos_config.xml',
            
        ],
    },
        # 'web.assets_backend': ['zuse_kds/static/src/js/pos_config.js'],
        # 'web.assets_qweb': ['zuse_kds/static/src/xml/pos_config.xml']
    
    # always loaded
    'data': [
    ],

    # only loaded in demonstration mode
    'images': ["static/description/banner.png"],
    'license': 'OPL-1',
    'installable': True,
    'application': True,
    'price': 362.29,
    'currency': 'USD'
}
