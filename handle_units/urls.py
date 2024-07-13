"""
URL configuration for law_units project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('login/', views.user_login,name="login"),
    path('index/', views.index,name="index"),
    path('home/cases/',views.cases,name="cases"),
    path('home/NewCase/',views.add_case,name="newcases"),
    path('home/',views.home,name="home"),
    path('home/forgotpassword/',views.forgotpassword,name="forgotpassword"),
    path('home/Document/',views.document,name="doc"),
    path('home/NewDocument/',views.newdocument,name="NewDocument"),
    path('home/Teams/',views.list_team,name="team"),
    path('home/CompletedToDo/',views.completedtodo,name="todo"),
    path('home/UpcomingToDo/',views.upcomingtodo,name="upcomingtodo"),
    path('home/PendingToDo/',views.pendingtodo,name="pendingtodo"),
    path('home/AllToDo/',views.alltodo,name="alltodo"),
    path('home/dashboard/',views.Dashboard,name="dashboard"),
    path('signup/',views.Signup,name="signup"),
    path('home/calendar/',views.Calender,name="calendar"),
    path('add_case/',views.add_case,name="add_case"),
    path('home/addmember/',views.Addmember,name="add_team"),
    #path('home/Teams',views.Teams,name="Teams"),
    path('home/Advocates',views.Advocates,name="Advocates"),
    path('home/NewAdvocate',views.NewAdvocate,name="NewAdvocate"),
    path('home/team_pagi',views.team_table_page,name="team_pagi"),
    path('home/delete_record',views.delete_record,name="delete_record"),
    path('home/add_todo',views.add_todo,name="home/add_todo"),
    path('home/change_to_do_status',views.change_to_status,name="change_to_status"),
    path('home/filter_todo',views.filter_todo,name="filter_todo"),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
            