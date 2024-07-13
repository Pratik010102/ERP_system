from django.db import models
from django.contrib.auth.models import User

class Advocate(models.Model):
    advocate_id = models.IntegerField(primary_key=True)
    fullname = models.CharField(max_length=100)
    email = models.EmailField()
    number = models.CharField(max_length=10)
    age = models.IntegerField()
    father_name = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    website = models.URLField(null=True, blank=True)
    tin = models.CharField(max_length=100)
    gst = models.CharField(max_length=30)
    pan = models.CharField(max_length=20)
    hourly_rate = models.IntegerField()

class office_address(models.Model):
    advocate = models.ForeignKey(Advocate, on_delete=models.CASCADE)
    address_line1 = models.CharField(max_length=255)
    address_line2 = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zip_postal_code = models.CharField(max_length=20)

class home_address(models.Model):
    advocate = models.ForeignKey(Advocate, on_delete=models.CASCADE)
    address_line1 = models.CharField(max_length=255)
    address_line2 = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zip_postal_code = models.CharField(max_length=20)

class contact_point(models.Model):
    advocate = models.ForeignKey(Advocate,on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    contact_email = models.EmailField()
    phone_number = models.IntegerField()
    designation = models.CharField(max_length=20)

class case(models.Model):
    advocate = models.ForeignKey(Advocate,on_delete=models.CASCADE)
    case_number = models.IntegerField(primary_key=True)
    case_type = models.CharField(max_length=100)
    court = models.CharField(max_length=50)
    cnr_number = models.BooleanField()
    cnr = models.CharField(max_length=100)
    respondent = models.CharField(max_length=100)
    high_court = models.CharField(max_length=50)
    state=models.CharField(max_length=50,null=True,blank=True)
    district=models.CharField(max_length=50,null=True,blank=True)
    court_establishment=models.CharField(max_length=50,null=True,blank=True)
    year = models.IntegerField()
    appearing_as = models.CharField(max_length=100)
    Petitioner = models.CharField(max_length=100)
    date_of_filling = models.DateField()
    court_hall = models.CharField(max_length=100)
    floor = models.CharField(max_length=50)
    classification = models.CharField(max_length=100)
    tital = models.CharField(max_length=60)
    disc = models.CharField(max_length=100)
    Before_Honble_Judg = models.CharField(max_length=100)
    ref_by = models.CharField(max_length=50)
    section = models.CharField(max_length=50)
    Priority = models.CharField(max_length=100)
    under_act = models.CharField(max_length=50)
    under_section = models.CharField(max_length=50)
    fir_police_station = models.CharField(max_length=50)
    fir_number = models.CharField(max_length=50)
    fir_year = models.IntegerField()
    affidavit_vakalat = models.CharField(max_length=20)
    affidavit_vakalat_date = models.DateField()


class opponent(models.Model):
    case = models.ForeignKey(case,on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.IntegerField()

class opponent_advocate(models.Model):
    case = models.ForeignKey(case,on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.IntegerField()

class team_member(models.Model):
    member_id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length= 20)
    designation = models.CharField(max_length=50)
    email = models.EmailField()
    number = models.IntegerField()

class ToDO(models.Model):
    to_do_id = models.IntegerField(primary_key=True)
    case_id = models.ForeignKey(case,on_delete=models.CASCADE)
    advocate_name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    assign_by = models.CharField(max_length=20,null=True,blank=True)
    status = models.CharField(default="pending",max_length=20)


class Document(models.Model):
    file = models.ImageField(upload_to="uploaded")
    file_name = models.CharField(max_length=20,null=True,blank=True)
    type=models.CharField(max_length=50,null=True,blank=True)
    doc_type = models.CharField(max_length=20,blank=True,null=True)
    would_like_to_linkdoc=models.BooleanField()
    case_name = models.ForeignKey(case,on_delete=models.CASCADE,null=True,blank=True)
    term=models.CharField(max_length=50)
    description=models.CharField(max_length=100)
    judgement_date=models.DateField()
    expiry_date=models.DateField()
    purpose=models.CharField(max_length=50)
    first_party=models.CharField(max_length=50)
    second_party=models.CharField(max_length=50)
    headed_by=models.CharField(max_length=50)
    uploaded_by =models.CharField(max_length=20)
    uploaded_at = models.DateField(auto_now_add=True)
    size = models.CharField(max_length=20)

class Profile(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    auth_token = models.CharField(max_length=100 )
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username