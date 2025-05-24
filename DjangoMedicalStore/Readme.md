# Project Setup Guide

This README provides instructions to set up and run the project.

## 🚀 Getting Started

Follow these steps to set up and run the project:

```turminal or bash
# Step 1: Activate the virtual environment
    cd venv

    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

    .\Scripts\activate

# Step 2: Return to the project root directory
    cd ..

# Step 3: Install required Python packages
    pip install -r requirements.txt

# Step 4: Make migrations
    python manage.py makemigrations

# Step 5: Apply migrations to the database
    python manage.py migrate

# Step 6: Run the development server
    python manage.py runserver
