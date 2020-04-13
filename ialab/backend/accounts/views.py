from django.contrib.auth.models import User
from django.contrib import auth
from django.shortcuts import redirect, render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

def signup(request):
    if request.method == "POST":
        if request.POST["password1"] == request.POST["password2"]:
            user = User.objects.create_user(
                username=request.POST["username"], password=request.POST["password1"])
            auth.login(request,user)
    return render(request, 'signup.html')

@csrf_exempt
def login(request):
    response = render(request, 'login.html')
    response.set_cookie('message',' ')
    # 해당 쿠키에 값이 없을 경우 None을 return 한다.
    if request.COOKIES.get('username') is not None:
        username = request.COOKIES.get('username')
        password = request.COOKIES.get('password')
        user = auth.authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            #로그인 성공
            response = render(request, 'login.html')
            return redirect("http://localhost:3000/")
        else:
            #실패
            return render(request, 'login.html', {
                'message':' '
            })
      
    elif request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        # 해당 user가 있으면 username, 없으면 None
        user = auth.authenticate(request, username=username, password=password)

        #유저가 있으면
        if user is not None:
            auth.login(request, user)
            #자동 로그인
            if request.POST.get("keep_login") == "TRUE":
                response = render(request, 'login.html')
                response.set_cookie('username',username)
                response.set_cookie('password',password)
                response.set_cookie('auth','true')
                return response
            return redirect("http://localhost:3000/")
        else:
            #실패 시
            return render(request, 'login.html', {'message': '아이디 혹은 비밀번호가 일치하지 않습니다.'})
        return render(request, 'login.html', {'아이디 혹은 비밀번호를 입력해주세요'})
    else:
        return render(request, 'login.html', {'message': '아이디 혹은 비밀번호를 입력해주세요'})
    return render(request, 'login.html', {'message': '아이디 혹은 비밀번호를 입력해주세요'})


def logout(request):
    response = render(request, 'login.html')
    response.delete_cookie('username')
    response.delete_cookie('password')
    auth.logout(request)
    return response

def searchid(request):
    return render(request, 'searchid.html')

def searchpw(request):
    return render(request, 'searchpw.html')


