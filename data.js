var APP_DATA = {
  "scenes": [
    {
      "id": "0-alice-lee-plaza",
      "name": "Alice Lee Plaza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.700253566817242,
        "pitch": -0.2380772115157832,
        "fov": 1.2066849832423883
      },
      "linkHotspots": [
        {
          "yaw": -3.130700314002521,
          "pitch": 0.0018979165488381966,
          "rotation": 0,
          "target": "1-conservatory-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.4328989298904578,
          "pitch": -0.3447002913077224,
          "title": "Alice Lee P",
          "text": "a huge well-designed glass building"
        }
      ]
    },
    {
      "id": "1-conservatory-foyer",
      "name": "Conservatory Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.8702081923795166,
        "pitch": 0.21191524273577755,
        "fov": 1.2066849832423883
      },
      "linkHotspots": [
        {
          "yaw": -2.9243751512502314,
          "pitch": 0.07501947525629049,
          "rotation": 0,
          "target": "2-conservatory-lounge"
        },
        {
          "yaw": -0.7331890756792419,
          "pitch": -0.0025927468399657982,
          "rotation": 0,
          "target": "0-alice-lee-plaza"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2797416615793846,
          "pitch": 0.3286480348065375,
          "title": "sculpture",
          "text": "a sculpture at Conservatory F"
        }
      ]
    },
    {
      "id": "2-conservatory-lounge",
      "name": "Conservatory Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2066849832423883
      },
      "linkHotspots": [
        {
          "yaw": -0.1807868154215715,
          "pitch": 0.042276459805432154,
          "rotation": 0,
          "target": "1-conservatory-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6914492873992479,
          "pitch": -0.04269405024607309,
          "title": "memories wall",
          "text": "photos of the building history"
        }
      ]
    }
  ],
  "name": "assignment",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
