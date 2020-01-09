var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    const data = [
        {'name': 'Car Accident',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Boat Accident',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Brain Injury',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Defective Product',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Dog Bite',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Drug Injury',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Environmental Injury',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Fire and Burn Injury',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Life Insurance Company Fraud',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Motorcycle Accident',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Negligent Security',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Nursing Home Abuse',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Railroad Accident',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Scooter Accidents',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Slip and Fall',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Social Security Disability',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Truck Accident',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Veterans Disability Benefits',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Wildfire Liability',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        },
        {'name': 'Wrongful Death',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna. Tellus pellentesque eu tincidunt tortor aliquam nulla.'
        }
    ];
    res.render('injuries', {data: data});
})

module.exports = router;