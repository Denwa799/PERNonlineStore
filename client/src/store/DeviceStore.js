import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ]
        this._devices = [
            {
                id: 1,
                name: 'Iphone 12 pro',
                price: 25000,
                rating: 5,
                img: 'https://76.img.avito.st/image/1/LcqlbbaBgSPTyHMl8zFr8kDOhSUHzoElYK2FJdPIcyUTyo0nE8yBZw'
            },
            {
                id: 2,
                name: 'Galaxy A12',
                price: 10000,
                rating: 5,
                img: 'https://brosbg.com/uploads/samsung-galaxy-a10s-a107f-dual-gsm-big-3155-5-1669722711.jpg'
            },
            {
                id: 3,
                name: 'Iphone 12 pro',
                price: 25000,
                rating: 5,
                img: 'https://76.img.avito.st/image/1/LcqlbbaBgSPTyHMl8zFr8kDOhSUHzoElYK2FJdPIcyUTyo0nE8yBZw'
            },
            {
                id: 4,
                name: 'Galaxy A12',
                price: 10000,
                rating: 5,
                img: 'https://brosbg.com/uploads/samsung-galaxy-a10s-a107f-dual-gsm-big-3155-5-1669722711.jpg'
            },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }


    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}