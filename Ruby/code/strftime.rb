require 'date'

p Date.today                      # #<Date: 2023-07-05 ((2460131j,0s,0n),+0s,2299161j)>
p Date.today.strftime('%F')       # "2023-07-05"
p Date.today.strftime('%Y-%m-%d') # "2023-07-05"

p Date.today.strftime('%Y')     # "2023"
p Date.today.strftime('%y')     # "23"
p Date.today.strftime('%m')     # "07"
p Date.today.strftime('%d')     # "05"
p Date.today.strftime('%m/%d')  # "07/05"
