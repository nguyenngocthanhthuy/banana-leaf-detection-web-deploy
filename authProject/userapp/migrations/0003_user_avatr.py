# Generated by Django 4.2.11 on 2024-04-19 04:36

from django.db import migrations, models
import userapp.models


class Migration(migrations.Migration):

    dependencies = [
        ('userapp', '0002_user_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatr',
            field=models.ImageField(blank=True, null=True, upload_to=userapp.models.user_directory_path),
        ),
    ]