/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '0iwvvn-w0.myshopify.com',
      storefrontAccessToken: 'c8b1e3d661d0c91a0a0739b79764931f',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '15156691763578',
        node: document.getElementById('product-component-1749998260859'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "title": {
        "font-family": "Open Sans, sans-serif"
      },
      "button": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#5f9f99"
        },
        "background-color": "#6ab1aa",
        ":focus": {
          "background-color": "#5f9f99"
        }
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "description": {
        "font-family": "Open Sans, sans-serif"
      }
    },
    "buttonDestination": "checkout",
    "text": {
      "button": "NU KOPEN"
    },
    "googleFonts": [
      "Open Sans"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#5f9f99"
        },
        "background-color": "#6ab1aa",
        ":focus": {
          "background-color": "#5f9f99"
        }
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "description": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "14px",
        "color": "#4c4c4c"
      }
    },
    "googleFonts": [
      "Open Sans"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#5f9f99"
        },
        "background-color": "#6ab1aa",
        ":focus": {
          "background-color": "#5f9f99"
        }
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "googleFonts": [
      "Open Sans"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold",
        "background-color": "#6ab1aa",
        ":hover": {
          "background-color": "#5f9f99"
        },
        ":focus": {
          "background-color": "#5f9f99"
        }
      },
      "count": {
        "font-size": "14px"
      }
    },
    "googleFonts": [
      "Open Sans"
    ]
  }
},
      });
    });
  }
})();
/*]]>*/
