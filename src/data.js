/*jshint esversion: 6 */

export const PieceInfo = [
    // {
    //     "product_id": 100,
    //     "name": "Dress",
    //     "display_name": "Rae Dress",
    //     "type": "Denim",
    //     "option_values": [
    //         {
    //             "label": "S",
    //             "sort_order": 0,
    //             "is_default": false
    //         },
    //         {
    //             "label": "M",
    //             "sort_order": 1,
    //             "is_default": true
    //         },
    //         {
    //             "label": "L",
    //             "sort_order": 2,
    //             "is_default": false
    //         }
    //     ]
    // },
    {
        "data": [
            {
                "id": 1,
                "parent_id": 0,
                "name": "Dress",
                "is_visible": true,
                "url": "/dress/",
                "children": []
            },
            {
                "id": 2,
                "parent_id": 0,
                "name": "Pant",
                "is_visible": true,
                "url": "/pant/",
                "children": [
                    {
                        "id": 1,
                        "parent_id": 2,
                        "name": "Straight-Cut",
                        "is_visible": true,
                        "url": "/pant/straight-cut/",
                        "children": []
                    },
                    {
                        "id": 2,
                        "parent_id": 2,
                        "name": "Palazo",
                        "is_visible": true,
                        "url": "/pant/palazo/",
                        "children": []
                    },
                    {
                        "id": 3,
                        "parent_id": 2,
                        "name": "Ankle-Length",
                        "is_visible": true,
                        "url": "/pant/ankle-lenght/",
                        "children": []
                    }
                ]
            },
            {
                "id": 3,
                "parent_id": 0,
                "name": "Jumpsuit",
                "is_visible": true,
                "url": "/jumpsuit/",
                "children": [
                    {
                        "id": 1,
                        "parent_id": 3,
                        "name": "PlaySuit",
                        "is_visible": true,
                        "url": "/jumpsuit/playsuit/",
                        "children": []
                    }
                ]
            },
            {
                "id": 4,
                "parent_id": 0,
                "name": "Skirt",
                "is_visible": true,
                "url": "/skirt/",
                "children":[]
            },    
            {
                "id": 5,
                "parent_id": 0,
                "name": "Blouse",
                "is_visible": true,
                "url": "/blouse/",
                "children": []
            },
        ],
        "meta": {}  
    }
]

export default PieceInfo;

