from django.contrib.auth.models import User
from django.contrib import auth

def signup(request):
    return redirect('accounts/login/')
def login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = auth.autenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('/')
    else:
        return redirect('')
def logout(request):
    auth.logout(request)
    return redirect('accounts/login/')


