# Generated by Django 2.2.14 on 2020-07-13 23:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300)),
                ('link', models.CharField(max_length=500)),
                ('outlet', models.CharField(max_length=200)),
                ('published_date', models.DateTimeField(blank=True, null=True)),
                ('order_num', models.IntegerField(null=True, unique=True, verbose_name='Priority')),
            ],
        ),
    ]
