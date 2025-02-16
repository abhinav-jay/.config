ansiweather -l Paris -a false -s true -i false -w false -h false -H false -p false -d false | sed "s/\bWeather\b//g" | sed "s/\bin\b//g" | sed "s/\bParis\b//g" | sed 's/://'
