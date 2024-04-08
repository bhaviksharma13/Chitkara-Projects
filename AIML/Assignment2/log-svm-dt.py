import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('titanic.csv')
# print(df.columns)

Sex = pd.get_dummies(df['Sex'])
Sex = Sex[['male', 'female']].replace({True : 1, False : 0})
Embarked = pd.get_dummies(df['Embarked'])
Embarked = Embarked[['C', 'Q', 'S']].replace({True : 1, False : 0})


df = df.drop(columns=['Name', 'Ticket', 'Cabin', 'Sex', 'Embarked', 'PassengerId'])
df = pd.concat([df, Sex, Embarked], axis = 1)

# print(df.dtypes)

# correlation_matrix = df.corr()
# sns.heatmap(correlation_matrix, cmap='coolwarm')
# plt.show()


# print(df['Age'].corr(df['Fare']))

# sns.countplot(x = 'Survived', hue='Pclass', data=df)
# plt.show()

# sns.displot(df['Age'].dropna(), bins=40)
# plt.show()

class1 = df[df['Pclass'] == 1]
# print(class1['Age'].mean())

class2 = df[df['Pclass'] == 2]

class3 = df[df['Pclass'] == 3]



#                                                                            Fill Null Values
def fill(age, pclass):
    if pd.isnull(age):
        if pclass == 1:
            return 38
        elif pclass == 2:
            return 30
        else:
            return 25
    else:
        return age



for i in range(len(df)):
    df.loc[i, 'Age'] = fill(df.loc[i, 'Age'], df.loc[i, 'Pclass'])



#                                                                            Train Test Split 
from sklearn.model_selection import train_test_split

x = df.drop(columns=['Survived'])
y = df['Survived']

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)



#                                                                            Standardization 
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

x_train_scaled = scaler.fit_transform(x_train)
x_test_scaled = scaler.transform(x_test)


#                                                                            Logistic Regression
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()

model.fit(x_train_scaled, y_train)
y_pred = model.predict(x_test_scaled)


from sklearn.metrics import accuracy_score

accu = accuracy_score(y_pred, y_test)
print("Logistic Regression Accuracy score - ", accu)


#                                                                            Support Vector Machine
from sklearn import svm
svm = svm.SVC

model2 = svm(kernel = 'linear', C=7, degree=1)
# model2 = svm(kernel = 'rbf', C=7, gamma = 'scale')

model2.fit(x_train_scaled, y_train)
y_pred2 = model2.predict(x_test_scaled)


from sklearn.metrics import accuracy_score

print("SVM Accuracy score - ", accuracy_score(y_pred2, y_test))


#                                                                            Decision Tree Classifier
from sklearn.tree import DecisionTreeClassifier

model3 = DecisionTreeClassifier()

model3.fit(x_train_scaled, y_train)
y_pred3 = model3.predict(x_test_scaled)

print("Decision Tree Accuracy Score - ", accuracy_score(y_pred3, y_test))