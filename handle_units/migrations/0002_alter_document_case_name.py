# Generated by Django 5.0.4 on 2024-05-12 09:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('handle_units', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='case_name',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='handle_units.case'),
            preserve_default=False,
        ),
    ]
