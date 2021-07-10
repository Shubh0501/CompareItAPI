const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const General = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    brand: {
        type: String,
        required: [true, 'Brand name is required']
    },
    launchedDate: {
        type: String,
        default: null
    },
    cameraModel: {
        type: String,
        default: null
    },
    cameraType: {
        type: String,
        default: null
    },
    imageSensorType: {
        type: String,
        default: null
    },
    imageSensorSize: {
        type: String,
        default: null
    },
    effectivePixels: {
        type: String,
        default: null
    },
    totalPixels: {
        type: String,
        default: null
    },
    maxResolution: {
        type: String,
        default: null
    },
    aspectRatio: {
        type: String,
        default: null
    }
})

const Sensor = new Schema({
    ISORating: {
        type: String,
        default: null
    },
    whiteBalancePresets: {
        type: String,
        default: null
    },
    customWhiteBalance: {
        type: String,
        default: null
    },
    autofocusPoint: {
        type: String,
        default: null
    },
    processor: {
        type: String,
        default: null
    },
    minimumShutterSpeed: {
        type: String,
        default: null
    },
    maximumShutterSpeed: {
        type: String,
        default: null
    }
})

const Shutter = new Schema({
    shutterType: {
        type: String,
        default: null
    },
    continuousShooting: {
        type: String,
        default: null
    }
})

const Lens = new Schema({
    lensMount: {
        type: String,
        default: null
    },
    compatibleLenses: {
        type: String,
        default: null
    },
    focalLength: {
        type: String,
        default: null
    }
})

const ViewFinder = new Schema({
    type: {
        type: String,
        default: null
    },
    coverage: {
        type: String,
        default: null
    },
    magnification: {
        type: String,
        default: null
    },
    eyepoint: {
        type: String,
        default: null
    },
    diopricAdjustment: {
        type: String,
        default: null
    }
})

const Display = new Schema({
    size: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: null
    },
    touchscreen: {
        type: String,
        default: null
    },
    screenDots: {
        type: String,
        default: null
    }
})

const Flash = new Schema({
    builtInFlash: {
        type: String,
        default: null
    },
    externalFlash: {
        type: String,
        default: null
    }
})

const Power = new Schema({
    batteryModel: {
        type: String,
        default: null
    },
    batteryType: {
        type: String,
        default: null
    },
    batteryLife: {
        type: String,
        default: null
    },
    batteryLifeForVideo: {
        type: String,
        default: null
    }
})

const Connectivity = new Schema({
    wifi: {
        type: String,
        default: null
    },
    bluetooth: {
        type: String,
        default: null
    },
    hdmi: {
        type: String,
        default: null
    },
    usb: {
        type: String,
        default: null
    },
    remoteControl: {
        type: String,
        default: null
    }
})

const Storage = new Schema({
    memoryCardType: {
        type: String,
        default: null
    },
    videoFormat: {
        type: String,
        default: null
    },
    imageFormat: {
        type: String,
        default: null
    }
})

const Body = new Schema({
    dimension: {
        type: String,
        default: null
    },
    weight: {
        type: String,
        default: null
    },
    bodyConstruction: {
        type: String,
        default: null
    },
    durability: {
        type: String,
        default: null
    },
    colors: {
        type: String,
        default: null
    }
})

const Audio = new Schema({
    microphone: {
        type: String,
        default: null
    },
    speaker: {
        type: String,
        default: null
    }
})

const CameraSchema = new Schema({
    id: {
        type: String,
        required: ["Unique ID is required"],
        unique: ["ID must be unique"]
    },
    general: {
        type: [General],
        default: null
    },
    sensor: {
        type: [Sensor],
        default: null
    },
    shutter: {
        type: [Shutter],
        default: null
    },
    lens: {
        type: [Lens],
        default: null
    },
    viewfinder: {
        type: [ViewFinder],
        default: null
    },
    display: {
        type: [Display],
        default: null
    },
    flash: {
        type: [Flash],
        default: null
    },
    power: {
        type: [Power],
        default: null
    },
    connectivity: {
        type: [Connectivity],
        default: null
    },
    storage: {
        type: [Storage],
        default: null
    },
    body: {
        type: [Body],
        default: null
    },
    audio: {
        type: [Audio],
        default: null
    }
});

const Camera = mongoose.model('cameraschema', CameraSchema);

module.exports = Camera;
