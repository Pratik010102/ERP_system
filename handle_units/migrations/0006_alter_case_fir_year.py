# Generated by Django 5.0.4 on 2024-05-12 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('handle_units', '0005_alter_case_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='case',
            name='fir_year',
            field=models.IntegerField(),
        ),
    ]
