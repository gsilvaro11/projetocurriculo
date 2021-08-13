from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'index.html')

def experiencia(request):
    return render(request, 'experiencia.html')

def certificados(request):
    return render(request, 'certificados.html')

def projetos(request):
    return render(request, 'projetos.html')

