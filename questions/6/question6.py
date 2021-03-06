# Coding exercise:  Availity receives enrollment files from various
# benefits management and enrollment solutions (I.e. HR platforms,
# payroll platforms).  Most of these files are typically in EDI format.
# However, there are some files in CSV format.  For the files in CSV format,
# write a program in a language that seems appropriate to you that will read
# the content of the file and separate enrollees by insurance company in its
# own file. Additionally, sort the contents of each file by last and first name
# (ascending).  Lastly, if there are duplicate User Ids for the same Insurance 
# Company, then only the record with the highest version should be included.
# The following data points are included in the file:
#     User Id (string)
#     First and Last Name (string)
#     Version (integer)
#     Insurance Company (string)


def extract_info(filename):
    with open(filename, 'r') as reader:
        line_count = 0

    for row in reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count +=1
        print(f'{row[user_id]}, {row[name]},, {row[version]}, {row[insurance]}')
        line_count += 1

    sorted(reader[name], key=lambda x: x.slplit[-1])

    for id in reader:
        if id[user_id] == id[user_id]:
            for ver in id:
                return ver[version] > ver[version]

    