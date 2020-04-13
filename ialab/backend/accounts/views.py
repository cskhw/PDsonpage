from django.contrib.auth.models import User
from django.contrib import auth
from django.shortcuts import redirect, render
from django.http import HttpResponse, JsonResponse

def signup(request):
    return redirect('http://localhost:3000/')
def login(request):
    # 해당 쿠키에 값이 없을 경우 None을 return 한다.
    if request.COOKIES.get('username') is not None:
        username = request.COOKIES.get('username')
        password = request.COOKIES.get('password')
        user = auth.authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect("http://localhost:3000/")  
        else:
            return redirect("http://localhost:3000/login")

    elif request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        # 해당 user가 있으면 username, 없으면 None
        user = auth.authenticate(request, username=username, password=password)

        if user is not None:
            auth.login(request, user)
            if request.POST.get("keep_login") == "TRUE":
                response = render(request, 'account/home.html')
                response.set_cookie('username',username)
                response.set_cookie('password',password)
                return response
            return redirect("http://localhost:3000/")
        else:
            return JsonResponse({"message":"error"}, status=400)
            return redirect("http://localhost:3000/")
        return redirect("http://localhost:3000/")
    else:
        return redirect("http://localhost:3000/login")
    return redirect("http://localhost:3000/login")

def logout(request):
    response = render(request, 'http://localhost:3000/')
    response.delete_cookie('username')
    response.delete_cookie('password')
    auth.logout(request)
    return response


