# project related DOM

## project link
[click here]

#solution code

## project 1


##question 1

```
Armstrong number

#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int original = n;
    int temp = n;
    int count = 0;
    int sum = 0;

    // Count number of digits
    while(temp > 0)
    {
        count++;
        temp = temp / 10;
    }

    // Calculate sum of digits^count
    temp = n;

    while(temp > 0)
    {
        int digit = temp % 10;
        sum = sum + (int)pow(digit, count);
        temp = temp / 10;
    }

    if(sum == original)
        cout << "Armstrong Number";
    else
        cout << "Not Armstrong Number";

    return 0;
}




##question2
 ```Perfect number

 #include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int sum = 0;

    for(int i = 1; i < n; i++)
    {
        if(n % i == 0)
        {
            sum += i;
        }
    }

    if(sum == n)
        cout << "true";
    else
        cout << "false";

    return 0;
}


``` optimise 

#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;

    if(n == 1)
    {
        cout << "false";
        return 0;
    }

    int sum = 1;

    for(int i = 2; i * i <= n; i++)
    {
        if(n % i == 0)
        {
            sum += i;

            if(i != n / i)
            {
                sum += n / i;
            }
        }
    }

    if(sum == n)
        cout << "true";
    else
        cout << "false";

    return 0;
}


```Count sunday from the start of a month

#include <iostream>
using namespace std;

int main()
{
    string days[7] = {"Mon","Tue","Wed","Thu","Fri","Sat","Sun"};

    string startDay;
    int n;

    cin >> startDay;
    cin >> n;

    int startIndex;

    // Find index of starting day
    for(int i = 0; i < 7; i++)
    {
        if(days[i] == startDay)
        {
            startIndex = i;
            break;
        }
    }

    int count = 0;

    for(int i = 0; i < n; i++)
    {
        int currentDay = (startIndex + i) % 7;

        if(currentDay == 6)
        {
            count++;
        }
    }

    cout << count;

    return 0;
}



```count elements greater than all previous ones-------

#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0; i<n; i++){
        cin>>arr[i];
    }
    int count = 1;
      int maxEle = arr[0];
        for(int i=1; i<n; i++){
            if(arr[i] > maxEle){
                maxEle = arr[i];
                count ++;
                
            }
        }
        //cout<<maxEle<<endl;
    cout<<"count = "<<count<<endl;
    return 0;
}



``` product of digit

#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
   int product = 1;
    int temp = n;
    if(temp == 0){
        cout<<0<<endl;
        return 0;
}
    while( temp != 0){
        int digit = temp%10;
        product = product*digit;
        temp = temp/10;
    }
    cout<< product<<endl;
    return 0;
}



```Repeated digit sum r times


#include<iostream>
using namespace std;
int main(){
    
    int n, r;
    cin>>n>>r;
   
    int temp = n;
    int sum = 0;
     if(r == 0){
        cout<<0<<endl;
        return 0;
    }
    if(temp == 0){
        cout<<0<<endl;
        return 0;
    }
    while(temp !=0){
        int digit = temp%10;
        sum = sum +digit;
        temp = temp/10;
    }
    sum = sum*r;
    while(sum >=10){
        int newSum = 0;
        while(sum !=0){
            int digit = sum%10;
            newSum = newSum +digit;
            sum = sum/10;
        }
         sum = newSum;
    }
    cout<<sum<<endl;
    return 0;
}