import os
import pandas as pd


folder_path = "D:\oil spill"
files = os.listdir(folder_path)
file_names = [file for file in files if os.path.isfile(os.path.join(folder_path, file))]

# Create a DataFrame to store the file names
df = pd.DataFrame({"File Name": file_names})

# Specify the path to save the Excel file
excel_file_path = "file_names.xlsx"

# Save DataFrame to Excel
df.to_excel(excel_file_path, index=False)
print("File names extracted and saved to:", excel_file_path)
