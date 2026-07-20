def initiate():
    from .models import CarMake, CarModel

    car_make_data = [
        {"name": "Toyota", "description": "Japanese multinational automotive manufacturer known for reliability and efficiency."},
        {"name": "Ford", "description": "American multinational automaker known for trucks and SUVs."},
        {"name": "BMW", "description": "German luxury vehicle manufacturer known for performance and engineering."},
        {"name": "Chevrolet", "description": "American automobile division of General Motors, known for a wide range of vehicles."},
        {"name": "Honda", "description": "Japanese public multinational conglomerate known for cars and motorcycles."},
    ]

    car_make_instances = {}
    for data in car_make_data:
        car_make = CarMake.objects.create(
            name=data["name"],
            description=data["description"]
        )
        car_make_instances[data["name"]] = car_make

    car_model_data = [
        {"name": "Corolla", "type": "SEDAN", "year": 2022, "car_make": "Toyota"},
        {"name": "RAV4", "type": "SUV", "year": 2023, "car_make": "Toyota"},
        {"name": "F-150", "type": "SUV", "year": 2021, "car_make": "Ford"},
        {"name": "Mustang", "type": "COUPE", "year": 2022, "car_make": "Ford"},
        {"name": "3 Series", "type": "SEDAN", "year": 2023, "car_make": "BMW"},
        {"name": "X5", "type": "SUV", "year": 2022, "car_make": "BMW"},
        {"name": "Camaro", "type": "COUPE", "year": 2021, "car_make": "Chevrolet"},
        {"name": "Equinox", "type": "SUV", "year": 2023, "car_make": "Chevrolet"},
        {"name": "Civic", "type": "SEDAN", "year": 2022, "car_make": "Honda"},
        {"name": "CR-V", "type": "SUV", "year": 2023, "car_make": "Honda"},
    ]

    for data in car_model_data:
        CarModel.objects.create(
            name=data["name"],
            type=data["type"],
            year=data["year"],
            car_make=car_make_instances[data["car_make"]]
        )