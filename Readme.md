# Tehran-aqi
This is an Api for tehran air pollution (Aqi)

# Usage
Send a request to:
```
https://tehran-aqi.herokuapp.com
```
it gives you a Json response:
```
{
    daily: <number> : The Daily aqi
    now: <number> : Aqi of now
}
```

# How does it works
This aqi grabs data from https://airnow.tehran.ir/ And response a json objecy