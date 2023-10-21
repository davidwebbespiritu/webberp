from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in webberp/__init__.py
from webberp import __version__ as version

setup(
	name="webberp",
	version=version,
	description="Webb's add-in for ERPNext or Frappe Framework",
	author="David Webb Espiritu",
	author_email="davidwebbespiritu@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
