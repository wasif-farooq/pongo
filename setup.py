#!/usr/bin/python3.7

from setuptools import setup, find_packages

requirements = open('requirements.txt').read()

setup(
        name='pongo',
        version='0.0.1',
        description='web based mongo ui',
        author='sonsor',
        author_email='',
        packages=find_packages(),
        include_package_data=True,
        install_requires=requirements,
    )
