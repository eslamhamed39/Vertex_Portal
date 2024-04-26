# import os
# import pandas as pd


# folder_path = "D:\oil spill"
# files = os.listdir(folder_path)
# file_names = [file for file in files if os.path.isfile(os.path.join(folder_path, file))]

# # Create a DataFrame to store the file names
# df = pd.DataFrame({"File Name": file_names})

# # Specify the path to save the Excel file
# excel_file_path = "file_names.xlsx"

# # Save DataFrame to Excel
# df.to_excel(excel_file_path, index=False)
# print("File names extracted and saved to:", excel_file_path)



import os
from openpyxl import Workbook
from tqdm import tqdm


def get_files_without_extension(directory):
    file_names = []
    with tqdm(total=len(directory)) as pbar:
        for root, dirs, files in os.walk(directory):
            pbar.update(1)
            for file in files:
                file_name = file
                file_names.append(file_name)
        return file_names
directory_path = r"D:"

files_without_extension = get_files_without_extension(directory_path)

wb = Workbook()
ws = wb.active

for idx, file_name in enumerate(files_without_extension, start=1):
    ws.cell(row=idx, column=1, value=file_name)

excel_file_path = r"D:\All_File_in_partion(D)26-4-2024.xlsx"
wb.save(excel_file_path)
