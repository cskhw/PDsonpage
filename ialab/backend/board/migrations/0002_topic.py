# Generated by Django 3.0.2 on 2020-02-02 04:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=40)),
                ('description', models.TextField()),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('update', models.DateTimeField(auto_now=True)),
                ('author', models.CharField(max_length=16)),
                ('admin', models.CharField(max_length=16)),
            ],
        ),
    ]