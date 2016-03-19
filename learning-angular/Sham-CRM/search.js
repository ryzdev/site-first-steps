var searchApp = angular.module('searchApp', []);
searchApp.factory('SearchService', function(){
    var BobsProducts = {};
    BobsProducts =
    {
        "embedded": {
            "products": [
                {
                    "skuCode": "F2B1",
                    "data": null,
                    "id": "10007328",
                    "status": "Active",
                    "name": "Trade Subscription Band B with Option Level 1",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007328"
                        }
                    }
                },
                {
                    "skuCode": "FPBA",
                    "data": null,
                    "id": "10007329",
                    "status": "Active",
                    "name": "Bonus Stock Adverts",
                    "channel": "Car",
                    "quantity": 2,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007329"
                        }
                    }
                },
                {
                    "skuCode": "FPBB",
                    "data": null,
                    "id": "10007330",
                    "status": "Active",
                    "name": "Bargain Stock Adverts",
                    "channel": "Car",
                    "quantity": 2,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007330"
                        }
                    }
                },
                {
                    "skuCode": "F2BASIC",
                    "data": null,
                    "id": "10007332",
                    "status": "Active",
                    "name": "Brilliant Basics",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007332"
                        }
                    }
                },
                {
                    "skuCode": "FPPY",
                    "data": null,
                    "id": "10007331",
                    "status": "Active",
                    "name": "Payment Holiday",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007331"
                        }
                    }
                },
                {
                    "skuCode": "FPS",
                    "data": {
                        "Stock Data Feed": "Yes"
                    },
                    "id": "10007409",
                    "status": "Active",
                    "name": "Contracted Stock Adverts",
                    "channel": "Car",
                    "quantity": 7,
                    "startDate": 1392249600000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007409"
                        }
                    }
                },
                {
                    "skuCode": "WSL",
                    "data": {
                        "Dealer Website URL": "http://www.liveurl.co.uk",
                        "Telephone 1": "0192584754"
                    },
                    "id": "10007412",
                    "status": "Active",
                    "name": "Dealer Website Link",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007412"
                        }
                    }
                },
                {
                    "skuCode": "WAV",
                    "data": null,
                    "id": "10007415",
                    "status": "Active",
                    "name": "Associated Vehicles",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007415"
                        }
                    }
                },
                {
                    "skuCode": "WCAV",
                    "data": null,
                    "id": "10007416",
                    "status": "Active",
                    "name": "Associated Vehicles for Non Car",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007416"
                        }
                    }
                },
                {
                    "skuCode": "WKSP",
                    "data": {
                        "Foreground Image 1": "foreground"
                    },
                    "id": "10007414",
                    "status": "Active",
                    "name": "Dealer Ad Branding",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007414"
                        }
                    }
                },
                {
                    "skuCode": "WSC",
                    "data": null,
                    "id": "10007413",
                    "status": "Active",
                    "name": "Stock Capping",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007413"
                        }
                    }
                },
                {
                    "skuCode": "WDSV",
                    "data": null,
                    "id": "10021747",
                    "status": "Active",
                    "name": "Dealer Stock View",
                    "channel": "Any",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10021747"
                        }
                    }
                },
                {
                    "skuCode": "WMPS",
                    "data": null,
                    "id": "10007418",
                    "status": "Active",
                    "name": "Mobile Premium Stock Listings",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007418"
                        }
                    }
                },
                {
                    "skuCode": "WASC",
                    "data": null,
                    "id": "10007430",
                    "status": "Active",
                    "name": "Additional Stock Cars",
                    "channel": "Car",
                    "quantity": 10,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007430"
                        }
                    }
                },
                {
                    "skuCode": "WTRK",
                    "data": null,
                    "id": "10028909",
                    "status": "Active",
                    "name": "Webtracker",
                    "channel": "Any",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10028909"
                        }
                    }
                },
                {
                    "skuCode": "WMP",
                    "data": null,
                    "id": "10007417",
                    "status": "Active",
                    "name": "Image Gallery",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007417"
                        }
                    }
                },
                {
                    "skuCode": "WSSO",
                    "data": null,
                    "id": "10007285",
                    "status": "Active",
                    "name": "Search Standout",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007285"
                        }
                    }
                },
                {
                    "skuCode": "WVSS",
                    "data": null,
                    "id": "10029359",
                    "status": "Active",
                    "name": "Image Slide Show",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10029359"
                        }
                    }
                },
                {
                    "skuCode": "WI01",
                    "data": null,
                    "id": "10007338",
                    "status": "Active",
                    "name": "Intelligence Package Lite",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007338"
                        }
                    }
                },
                {
                    "skuCode": "WMET",
                    "data": null,
                    "id": "10007339",
                    "status": "Active",
                    "name": "Profit Indicator",
                    "channel": "Car",
                    "quantity": 10,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007339"
                        }
                    }
                },
                {
                    "skuCode": "WMT1",
                    "data": null,
                    "id": "10007340",
                    "status": "Active",
                    "name": "Market Tracker Lite",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007340"
                        }
                    }
                },
                {
                    "skuCode": "WCTO",
                    "data": null,
                    "id": "10007425",
                    "status": "Active",
                    "name": "Call Tracker Pro",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10007425"
                        }
                    }
                },
                {
                    "skuCode": "WCTD",
                    "data": null,
                    "id": "10022628",
                    "status": "Active",
                    "name": "Call Tracker Recording",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10022628"
                        }
                    }
                },
                {
                    "skuCode": "ACT:WCTFG",
                    "data": {
                        "Call Tracker Number": "0192512345",
                        "CT Digital Tel": "01925123456",
                        "CT GEO Area": "01925"
                    },
                    "id": "10022940",
                    "status": "Active",
                    "name": "Auto Trader Call Tracker with GEO",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10022940"
                        }
                    }
                },
                {
                    "skuCode": "WCGI",
                    "data": null,
                    "id": "10023826",
                    "status": "Active",
                    "name": "Call Tracker GEO",
                    "channel": "Car",
                    "quantity": 1,
                    "startDate": 1389865749000,
                    "endDate": 253402214399000,
                    "type": "Component Details",
                    "links": {
                        "self": {
                            "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/10023826"
                        }
                    }
                }
            ]
        },
        "package": {
            "brand": "Auto Trader UK",
            "franchise": "Alfa Romeo",
            "did": "10000000",
            "sourceID": "100552",
            "dealerWebsite": "www.liveurl.co.uk",
            "sourceBrandName": "ATD",
            "name": "Flex2B Package level 1 up to 11 stock",
            "links": {
                "self": {
                    "href": "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552"
                }
            }
        }
    };

    return BobsProducts;
})

function SearchCtrl($scope, SearchService){
    $scope.idNumberMinimum = 10029359;
    $scope.url = "https://crm.autotrader.co.uk/crm-web/services/accounts/400021/packages/100552/products/";
    $scope.dataList = SearchService;
    $scope.originalList = angular.copy($scope.dataList);

    $scope.numProducts = function(){
        return $scope.dataList.embedded.products.length;
    }

    $scope.addNewProduct = function(){
        if($scope.newProductName == null){
            console.log('no product name entered');
            } else {
                $scope.idNumberMinimum++;
                SearchService.embedded.products.push({
                    name:$scope.newProductName,
                    id:$scope.idNumberMinimum,
                    links:{
                        self:{
                            href:$scope.url + $scope.idNumberMinimum
                        }
                    }
                });
            $scope.newProductName = null;
        }
    }

    $scope.clearAllProducts = function(){
        $scope.dataList.embedded.products = [];
    }

    $scope.restoreOriginalProducts = function(){
        angular.copy($scope.originalList, $scope.dataList);
    }
}
